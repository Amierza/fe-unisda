<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsResource\Pages;
use App\Models\News;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->label('Title')
                    ->reactive()
                    ->afterStateUpdated(function ($state, callable $set) {
                        $generatedLink = preg_replace('/[^a-zA-Z0-9]+/', '-', trim($state));
                        $generatedLink = strtolower($generatedLink);
                        $baseLink = trim($generatedLink, '-');
                        $existingLinks = News::where('link', 'LIKE', "$baseLink%")->pluck('link')->toArray();
                        if (in_array($baseLink, $existingLinks)) {
                            $suffix = 1;
                            while (in_array("{$baseLink}-{$suffix}", $existingLinks)) {
                                $suffix++;
                            }
                            $baseLink = "{$baseLink}-{$suffix}";
                        }
                        $set('link', $baseLink);
                    }),
                
                DatePicker::make('date')
                    ->required()
                    ->placeholder('Select a date')
                    ->label('Date'),

                TextInput::make('link')
                    ->required()
                    ->label('Link')
                    ->columnSpan(2),
                
                FileUpload::make('image')
                    ->required()
                    ->disk('public')
                    ->directory('assets')
                    ->preserveFilenames()
                    ->label('Image')
                    ->columnSpan(2),

                Repeater::make('content')
                    ->schema([
                        Select::make("type")
                            ->label('Type')
                            ->options([
                                "text" => 'Text',
                                'textTitle' => 'Text Title',
                                'textBox' => 'Text Box',
                                'image' => 'Image',
                                'images' => 'Images',
                                'list' => 'List',
                                'listt' => 'Listt',
                                'lisst' => 'Lisst',
                                'lisstt' => 'Lisstt',
                            ])
                            ->columnSpan(2)
                            ->required()
                            ->reactive(),
                        
                        Textarea::make("value_text")
                            ->label('Text Content')
                            ->visible(fn ($get) => $get("type") === "text")
                            ->columnSpan(2)
                            ->required(),
                            
                        TextInput::make('value_textTitle')
                            ->label('Text Title')
                            ->visible(fn ($get) => $get('type') === 'textTitle')
                            ->columnSpan(2)
                            ->required(),
                            
                        Repeater::make('value_textBox')
                            ->schema([
                                TextArea::make('value')
                                    ->label('List Text')
                                    ->required(),
                            ])
                            ->label('Text Box')
                            ->visible(fn ($get) => $get('type') === 'textBox')
                            ->cloneable()
                            ->grid(2)
                            ->required(),
                            
                        FileUpload::make('value_image')
                            ->label('Image')
                            ->visible(fn ($get) => $get('type') === 'image')
                            ->image()
                            ->disk('public')
                            ->directory('assets')
                            ->preserveFilenames()
                            ->columnSpan(2)
                            ->required(),

                        Repeater::make('value_images')
                            ->label('Images')
                            ->visible(fn ($get) => $get('type') === 'images')
                            ->schema([
                                FileUpload::make('item')->label('Image')
                                    ->required()
                                    ->image()
                                    ->disk('public')
                                    ->directory('assets')
                                    ->preserveFilenames()
                                    ->required(),
                            ])
                            ->grid(2)
                            ->cloneable()
                            ->required(),
                            
                        Repeater::make('value_list')
                            ->label('List Items')
                            ->visible(fn ($get) => $get('type') === 'list')
                            ->schema([
                                TextInput::make('title')->label('List Title')->required(),
                                Repeater::make('items')
                                    ->schema([
                                        TextArea::make('items')->label('List Item')->required(),
                                        TextInput::make('linkItems')->label('Link Items'),
                                    ])
                            ])
                            ->grid(2)
                            ->cloneable()
                            ->required(),

                        Repeater::make('value_listt')
                            ->label('List Items')
                            ->visible(fn ($get) => $get('type') === 'listt')
                            ->schema([
                                TextInput::make('title')->label('List Title')->required(),
                                Repeater::make('items')
                                    ->schema([
                                        TextInput::make('subtitle')->label('List Subtitle')->required(),
                                        TextArea::make('description')->label('List Description')->required(),
                                    ])
                                    ->cloneable()
                                    ->grid(2)
                                    ->label("List Item")
                                    ->required()
                            ])
                            ->required(),

                        Repeater::make('value_lisst')
                            ->label('List Items')
                            ->visible(fn ($get) => $get('type') === 'lisst')
                            ->schema([
                                TextInput::make('title')->label('List Title')->required(),
                                TextArea::make('items')->label('List Item')->required(),
                            ])
                            ->grid(2)
                            ->cloneable()
                            ->required(),

                        Repeater::make('value_lisstt')
                            ->label('List Items')
                            ->visible(fn ($get) => $get('type') === 'lisstt')
                            ->schema([
                                TextArea::make('item')->label('List Item')->required(),
                            ])
                            ->cloneable()
                            ->grid(2)
                            ->required(),
                    ])
                    ->columnSpanFull()
                    ->cloneable()
                    ->collapsible()
                    ->collapsed()
                    ->label("Content")
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label("ID")->sortable()->searchable(),
                TextColumn::make('title')->label("Title")->sortable()->searchable()->limit(50),
                TextColumn::make('date')->label("Date")->sortable()->date(),
                TextColumn::make('link')->label("Link")->limit(20),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}
