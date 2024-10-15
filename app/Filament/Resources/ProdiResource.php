<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProdiResource\Pages;
use App\Models\Prodi;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ProdiResource extends Resource
{
    protected static ?string $model = Prodi::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            TextInput::make('title')
                ->label("Title")
                ->required(),

            TextInput::make('link')
                ->label("Link")
                ->required(),

            FileUpload::make('image')
                ->label('Image')
                ->disk('public')
                ->directory('assets')
                ->preserveFilenames()
                ->required(),

            Repeater::make('content')
                ->schema([
                    TextInput::make("title")
                        ->label('Title'),

                    Select::make("type")
                        ->label('Type')
                        ->options([
                            "text" => 'Text',
                            'list' => 'List',
                            'listArray' => 'List Spesific',
                            'images' => 'Images',
                        ])
                        ->required()
                        ->reactive(),
                    
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

                    Textarea::make("value_text")
                        ->rows(5)
                        ->label('Text Content')
                        ->visible(fn ($get) => $get("type") === "text")
                        ->required(),

                    Repeater::make('value_list')
                        ->label('List Items')
                        ->visible(fn ($get) => $get('type') === 'list')
                        ->schema([
                            Textarea::make('items')
                                ->rows(3)
                                ->label('List Item')
                                ->required(),
                        ])
                        ->grid(2)
                        ->required(),
                    
                    Repeater::make('value_listArray')
                        ->label('List Spesific Items')
                        ->visible(fn ($get) => $get('type') === 'listArray')
                        ->schema([
                            TextInput::make('title')
                                ->label('List Title')
                                ->required(),
                            Repeater::make('items')
                                ->schema([
                                    Textarea::make('item')
                                        ->rows(3)
                                        ->label('List Items')
                                        ->required(),
                                ])
                                ->grid(2)
                                ->label("List Item")
                                ->required()
                        ])
                        ->columns(1)
                        ->required(),
                ])
                ->cloneable()
                ->collapsible()
                ->columns(1)
                ->collapsed()
                ->label("Content")
        ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->label("Title")->sortable()->searchable(),
                TextColumn::make('link')->label("Link"),
                ImageColumn::make('image')->label("Image"),
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
            'index' => Pages\ListProdis::route('/'),
            'create' => Pages\CreateProdi::route('/create'),
            'edit' => Pages\EditProdi::route('/{record}/edit'),
        ];
    }
}
