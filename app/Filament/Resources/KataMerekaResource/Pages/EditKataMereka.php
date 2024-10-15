<?php

namespace App\Filament\Resources\KataMerekaResource\Pages;

use App\Filament\Resources\KataMerekaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditKataMereka extends EditRecord
{
    protected static string $resource = KataMerekaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
