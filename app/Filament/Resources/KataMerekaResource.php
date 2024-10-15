<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KataMerekaResource\Pages;
use App\Models\KataMereka;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class KataMerekaResource extends Resource
{
    protected static ?string $model = KataMereka::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('commentatorName')
                    ->label("Commentator Name")
                    ->required(),

                TextInput::make('commentatorCompany')
                    ->label("Commentator Company")
                    ->required(),

                Textarea::make("comment")
                    ->rows(5)
                    ->label('Comments')
                    ->required(),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('commentatorName')->label("Title")->sortable()->searchable(),
                TextColumn::make('commentatorCompany')->label(label: "Link")->sortable()->searchable(),
                TextColumn::make('comment')->label("Comments")->limit(20),
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
            'index' => Pages\ListKataMerekas::route('/'),
            'create' => Pages\CreateKataMereka::route('/create'),
            'edit' => Pages\EditKataMereka::route('/{record}/edit'),
        ];
    }
}
