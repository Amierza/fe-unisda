<?php

namespace App\Filament\Resources;

use App\Filament\Resources\StructureResource\Pages;
use App\Filament\Resources\StructureResource\RelationManagers;
use App\Models\Structure;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class StructureResource extends Resource
{
    protected static ?string $model = Structure::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')->label("Name")->required(),
                Textarea::make('role')->label("Role")->required(),
                FileUpload::make('image')
                ->label("Image")
                ->disk('public')
                ->directory('assets')
                ->preserveFilenames()
                ->required(),
                TextArea::make('description')->label("Description")->required(),
                TextInput::make('NIDN')->label("NIDN")->required(),
                TextArea::make('address')->label("Address")->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->label("Name")->sortable()->searchable(),
                Tables\Columns\TextColumn::make('role')->label("Role")->sortable()->searchable(),
                Tables\Columns\TextColumn::make('description')->label("Description"),
                Tables\Columns\TextColumn::make('NIDN')->label("NIDN"),
                Tables\Columns\TextColumn::make('address')->label("Address"),
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
            'index' => Pages\ListStructures::route('/'),
            'create' => Pages\CreateStructure::route('/create'),
            'edit' => Pages\EditStructure::route('/{record}/edit'),
        ];
    }
}
