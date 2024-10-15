<?php

namespace App\Http\Controllers;

use App\Models\KataMereka;
use App\Models\News;
use App\Models\Prodi;
use App\Models\SOP;
use App\Models\Structure;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function transformData($content)
    {
        $transformedContent = [];
    
        foreach ($content as $item) {
            if (!isset($item['type'])) {
                continue;
            }
    
            switch ($item['type']) {
                case 'text':
                    $transformedContent[] = [
                        'title' => $item['title'] ?? null,
                        'type' => $item['type'],
                        'value' => $item['value_text'] ?? null,
                    ];
                    break;
    
                case 'textTitle':
                    $transformedContent[] = [
                        'type' => $item['type'],
                        'value' => $item['value_textTitle'] ?? null,
                    ];
                    break;
    
                case 'textBox':
                    if (isset($item['value_textBox'])) {
                        $textBoxItems = [];
                        foreach ($item['value_textBox'] as $textBox) {
                            $textBoxItems[] = [
                                'value' => $textBox['value'] ?? null,
                            ];
                        }
                        $transformedContent[] = [
                            'type' => $item['type'],
                            'value' => $textBoxItems,
                        ];
                    }
                    break;
    
                case 'image':
                    $transformedContent[] = [
                        'type' => $item['type'],
                        'value' => $item['value_image'] ?? null,
                    ];
                    break;
    
                case 'images':
                    if (isset($item['value_images'])) {
                        $imagesItems = [];
                        foreach ($item['value_images'] as $image) {
                            $imagesItems[] = [
                                'item' => $image['item'] ?? null,
                            ];
                        }
                        $transformedContent[] = [
                            'type' => $item['type'],
                            'value' => $imagesItems,
                        ];
                    }
                    break;
    
                case 'list':
                    if (isset($item['value_list'])) {
                        $listItems = [];
                        foreach ($item['value_list'] as $list) {
                            $listItems[] = [
                                'title' => $list['title'] ?? null,
                                'items' => $list['items'] ?? null,
                            ];
                        }
                        $transformedContent[] = [
                            'title' => $item['title'] ?? null,
                            'type' => $item['type'],
                            'value' => $listItems,
                        ];
                    }
                    break;
    
                case 'listt':
                    if (isset($item['value_listt'])) {
                        $listItems = [];
                        foreach ($item['value_listt'] as $list) {
                            $subItems = [];
                            if (isset($list['items'])) {
                                foreach ($list['items'] as $subItem) {
                                    $subItems[] = [
                                        'subtitle' => $subItem['subtitle'] ?? null,
                                        'description' => $subItem['description'] ?? null,
                                    ];
                                }
                            }
                            $listItems[] = [
                                'title' => $list['title'] ?? null,
                                'items' => $subItems,
                            ];
                        }
                        $transformedContent[] = [
                            'type' => $item['type'],
                            'value' => $listItems,
                        ];
                    }
                    break;
    
                case 'lisst':
                    if (isset($item['value_lisst'])) {
                        $listItems = [];
                        foreach ($item['value_lisst'] as $list) {
                            $listItems[] = [
                                'title' => $list['title'] ?? null,
                                'items' => $list['items'] ?? null,
                            ];
                        }
                        $transformedContent[] = [
                            'type' => $item['type'],
                            'value' => $listItems,
                        ];
                    }
                    break;
    
                case 'lisstt':
                    if (isset($item['value_lisstt'])) {
                        $listItems = [];
                        foreach ($item['value_lisstt'] as $list) {
                            $listItems[] = [
                                'item' => $list['item'] ?? null,
                            ];
                        }
                        $transformedContent[] = [
                            'type' => $item['type'],
                            'value' => $listItems,
                        ];
                    }
                    break;
                
                case 'listArray':
                    if (isset($item['value_listArray'])) {
                        $listItems = [];
                        foreach ($item['value_listArray'] as $list) {
                            $subItems = [];
                            if (isset($list['items'])) {
                                foreach ($list['items'] as $subItem) {
                                    $subItems[] = [
                                        'title' => $subItem['title'] ?? null,
                                        'item' => $subItem['item'] ?? null,
                                    ];
                                }
                            }
                            $listItems[] = [
                                'title' => $list['title'] ?? null,
                                'items' => $subItems,
                            ];
                        }
                        $transformedContent[] = [
                            'title' => $item['title'] ?? null,
                            'type' => $item['type'],
                            'value' => $listItems,
                        ];
                    }
                    break;
    
                default:
                    break;
            }
        }
    
        return $transformedContent;
    }

    public function getProdiData($prodi) {
        $contentData = is_array($prodi->content) ? $prodi->content : json_decode($prodi->content, true);
        
        if ($contentData !== null) {
            $content = $this->transformData($contentData);
            return [
                'id' => $prodi->id,
                'title' => $prodi->title,
                'link' => $prodi->link,
                'image' => $prodi->image,
                'content' => $content,
            ];
        } else {
            return [
                'id' => $prodi->id,
                'title' => $prodi->title,
                'link' => $prodi->link,
                'image' => $prodi->image,
                'content' => [],
            ];
        }
    }

    public function getProdisData($prodisData) {
        $contentProdis = [];
        foreach ($prodisData as $prodi) {
            $contentData = is_array($prodi->content) ? $prodi->content : json_decode($prodi->content, true);
            if ($contentData !== null) {
                $content = $this->transformData($contentData);
                $contentProdis[] = [
                    'id' => $prodi->id,
                    'title' => $prodi->title,
                    'link' => $prodi->link,
                    'image' => $prodi->image,
                    'content' => $content,
                ];
            } else {
                $contentProdis[] = [
                    'id' => $prodi->id,
                    'title' => $prodi->title,
                    'link' => $prodi->link,
                    'image' => $prodi->image,
                    'content' => [],
                ];
            }
        }
        return $contentProdis;
    }

    public function getNewsData($newsData) {
        $newss = $newsData;
        $contentNews = [];
        foreach ($newss as $news) {
            $contentData = is_array($news->content) ? $news->content : json_decode($news->content, true);
            $formattedDate = Carbon::parse($news->date)->translatedFormat('l, d F Y');
            if ($contentData !== null) {
                $content = $this->transformData($contentData);
                $contentNews[] = [
                    'id' => $news->id,
                    'title' => $news->title,
                    'date' => $formattedDate,
                    'image' => $news->image,
                    'link' => $news->link,
                    'content' => $content,
                ];
            } else {
                $contentNews[] = [
                    'id' => $news->id,
                    'title' => $news->title,
                    'date' => $formattedDate,
                    'image' => $news->image,
                    'link' => $news->link,
                    'content' => [],
                ];
            }
        }
        return $contentNews;
    }

    public function landingPage()
    {
        Carbon::setLocale('id');

        // get all prodi data
        $prodis = Prodi::select('id', 'title', 'link', 'image', 'content')->where('title', '!=', 'Fakultas Ekonomi')->get();
        $prodis = $this->getProdisData($prodis);

        // get all structure data
        $structures = Structure::all();

        // // get all news data
        $newss = News::select('id', 'title', 'date', 'image', 'link', 'content')->get();
        $news = $this->getNewsData($newss);

        return Inertia::render('LandingPage', [
            "prodis" => $prodis,
            "structures" => $structures,
            "newss" => $news,
        ]);
    }

    public function economicsFaculty()
    {
        $economyFacultyData = Prodi::find(1);
        $economyFacultyContents = $this->getProdiData($economyFacultyData);

        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);
        
        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('EconomicsFaculty', [
            'data' => $economyFacultyContents,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    public function akuntansi()
    {
        $akuntansiData = Prodi::find(2);
        $akuntansiContents = $this->getProdiData($akuntansiData);

        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);

        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('Akuntansi', [
            'data' => $akuntansiContents,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    public function manajemen()
    {
        $manajemenData = Prodi::find(3);
        $manajemenContents = $this->getProdiData($manajemenData);

        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);

        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('Manajemen', [
            'data' => $manajemenContents,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    public function kataMereka()
    {
        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);

        $data = KataMereka::all();

        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('KataMereka', [
            'data' => $data,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    public function sop()
    {
        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);

        $data = SOP::all();

        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('SOP', [
            'data' => $data,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    public function newsDetailPages($slug)
    {
        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);

        $newss = News::select('id', 'title', 'date', 'image', 'link', 'content')->get();
        $data = $this->getNewsData($newss);

        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('NewsDetailPages', [
            'slug' => $slug,
            'data' => $data,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    public function allNews()
    {
        $news = News::latest()->get();
        $news = $this->getNewsData($news);

        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);

        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('AllNews', [
            'data' => $news,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    public function archiveDetails($yearParam, $monthParam)
    {
        $formattedMonth = $monthParam;
        if ($monthParam) {
            $formattedMonth = sprintf('%02d', $monthParam);
        }
        $news = News::whereYear('date', $yearParam)
                ->whereMonth('date', $formattedMonth)
                ->latest()
                ->get();
        $news = $this->getNewsData($news);

        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);

        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('ArchiveDetails', [
            'yearParam' => $yearParam,
            'monthParam' => $monthParam,
            'archives' => $news,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    public function searchResults(Request $request)
    {
        $searchQuery = $request->input('search');
        $newsResults = News::where('title', 'LIKE', '%' . $searchQuery . '%')
                   ->orWhere('content', 'LIKE', '%' . $searchQuery . '%')
                   ->get();
        $prodiResults = Prodi::where('title', 'LIKE', '%' . $searchQuery . '%')
                   ->orWhere('content', 'LIKE', '%' . $searchQuery . '%')
                   ->get();
        $formattedResults = [];
        if ($newsResults->isNotEmpty()) {
            $formattedResults = $this->getNewsData($newsResults);
        }
        if ($prodiResults->isNotEmpty()) {
            $prodiData = $this->getProdisData($prodiResults);
            $formattedResults = array_merge($formattedResults, $prodiData);
        }

        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $formattedNewsData = $this->getFormattedNewsData($currentYear, $currentMonth);

        $latestNewsData = $this->getLatestNewsData();
        return Inertia::render('SearchResults', [
            'results' => $formattedResults,
            'searchQuery' => $searchQuery,
            'latestNews' => $latestNewsData,
            'newsDisplayForAYear' => $formattedNewsData
        ]);
    }

    function getLatestNewsData()
    {
        $latestNews = News::latest()
                          ->take(5)
                          ->select('id', 'title', 'date', 'image', 'link', 'content')
                          ->get();
        return $this->getNewsData($latestNews);
    }

    function getFormattedNewsData($yearParam, $currentMonth)
    {
        $newsDisplayForAYear = News::whereYear('date', $yearParam)
                                ->whereMonth('date', '<=', $currentMonth)
                                ->selectRaw('MONTH(date) as month, YEAR(date) as year')
                                ->distinct()
                                ->orderBy('month', 'asc')
                                ->get();

        $monthMapping = [
            '01' => 'Januari',
            '02' => 'Februari',
            '03' => 'Maret',
            '04' => 'April',
            '05' => 'Mei',
            '06' => 'Juni',
            '07' => 'Juli',
            '08' => 'Agustus',
            '09' => 'September',
            '10' => 'Oktober',
            '11' => 'November',
            '12' => 'Desember',
        ];

        return $newsDisplayForAYear->map(function ($news) use ($monthMapping) {
            $month = sprintf('%02d', $news->month);
            return [
                'month' => $news->month,
                'monthName' => $monthMapping[$month],
                'year' => $news->year,
            ];
        });
    }
}
