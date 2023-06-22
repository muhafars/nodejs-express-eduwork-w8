### Disini belajar tentang routing, app

### app.use menggunakan middlewares

### routes.js = sebagai routing page atau halaman

### app.js = sebagai root controller untuk halaman

### router{get, post, put, delete} untuk api

### 1. req.params => menerima request dari parameters url

    ### 1. req.param.id
    ### 2. const{object,object} = req.params

### 2. req.query => menerima request dari query parameters biasa digunakan untuk pagination

    ### 1. const{page, total}= req.query

### 3. res.send => menerima response dapat berupa json, html, dll tanpa json stringify

    ### 1. res.send('',()=>({})) = mengirim response berupa html atau plain text
    ### 2. res.json('',()=>({})) = mengirim response berupa json
