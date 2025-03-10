1. first class function : kemampuan untuk menggunakan function sebagai nilai / value
2. fist class func => nilai atau value tertinggi => dibanding parameter lain
3. first class function
   - function bisa disimpan di dalam variable
   - function dapat diteruskan atau dikirim sebagai argumen ke function lain (callback)
   - function dapat dijadiin return value (bisa disebut sebagai closure)
   - bisa bikin function yang dianggep sebagai object yang memiliki property dan method
4. callback function: adalah sebuah function yang dikirim sebagai argumen
5. Callback Function :
   - Fungsi yang dikirim sebagai argumen ke fungsi lain
   - Fungsi callback kemudian dieksekusi setelah tugas tertentu selesai
   - Sehingga memungkinkan penanganan operasi asynchronous
   - Karena async maka memungkinkan kode untuk berjalan non-blocking
   - Async => tidak perlu saling menunggu => karna udah async #eak
6. single threaded ...
7. Single threaded : program hanya mampu menjalankan satu perintah / task dalam satu waktu
8. Blocking : eksekusi kode terhenti karena sebuah task berjalan terlalu lama
9. non blocking : eksekusi kode tidak terhenti walaupun sebuah task berjalan terlalu lama
10. async : melakukan banyak tugas secara bersamaan
11. syncronous : saling nunggu
12. js nggak bisa multi thread
13. async + single thread = concurrency
14. asyn + multi thread = parallelism
15. pelajari v8
16. browser didalamnya ada mesin java script, di chrome namanya v8
17. kalo di browser lain namanya beda, cuman behaviournya mirip
18. browser ada js engine, ada v8 didalamnya ada call stack
19. timer bukan punyanya js engine, tapi punya browser
20. jadi kalo mau suruh nunggu, kita minjem kekuatan browser
21. mengelola html kita pengen drag and drop, click combo box, kita pinjem dom yang dimiliki browser bukan punya js engine
22. mau nonton netflix di chrome pake js, nggak bisa. kita butuh fetch punya browser
23. kita mau pake database local atau local storage itu punya browser
24. console log itu punya browser, walaupun itu ngetiknya di js tapi itu punya browser
25. code kita tau history apa yang di klik, itu kekuatan browser
26. web api => bisa nyalain mic, bisa tau geolocation dll
27. yang mau kita pake dalam web api = setTimeout, DOM, fetch, localStorage, console, location
28. setTimeout => salah satu web API yang asyncronous call back. jadi dia dikerjain dimesin yang berbeda. nah dia nunggu disitu sampe beres
29. event loop dan callback queue => bagian dari js engine
30. event loop :

    - Mekanisme yang digunakan oleh JS untuk menangani task yang asinkron (termasuk asynchronous callback)
    - Bertugas memantau call stack dan antrian callback (call back queue)
    - event loop tu kayak penjaga pintu bioskop, jadi dia liat kursi bioskop, kalo misal callstack atau bioskop ada yang kosong, task disuruh masuk
    - Ketika tugas asinkron selesai, callbacknya ditambahkan ke callback queue
    - Setelah itu, event loop akan memindahkannya ke call stack

31. Callback Queue :

    - Antrian dimana callback disimpan

32. microtask queue => kayak fast track di dufan
    contoh : fetch api
33. task queue => antrian reguler dufan
    contoh : setTimeout
34. web api setTimeout, DOM, dan fetch itu bersifat async
35. query selector lebih flexible
