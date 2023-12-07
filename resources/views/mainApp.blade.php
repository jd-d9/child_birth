<html dir="rtl">

<head>
    <meta charset="utf-8">
    <title>Nursing Compliance System | Putting nurses back in control| Nightingalepass</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Time to start working as a locum nurse, your way, with access to multiple agencies hundreds of shifts across the UK">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet preload">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

    @vite('resources/css/app.css')
    @vite('resources/css/responsive.css')
</head>

<body>
    <div id="app">
        <router-view></router-view>
    </div>
</body>
@vite('resources/js/app.js')
</html>
