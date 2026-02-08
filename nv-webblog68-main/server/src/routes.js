const isAuthenController = require('./controllers/isAuthenController')
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const BlogController = require('./controllers/BlogController')
const UploadController = require('./controllers/UploadController')
const CoffeeController = require('./controllers/CoffeeController') 

const fileUploadMiddleware = require('./middleware/fileUpload')

module.exports = (app) => {
  // User Management
  app.get('/users', isAuthenController, UserController.index)
  app.post('/user', UserController.create)
  app.put('/user/:userId', UserController.put)
  app.delete('/user/:userId', UserController.remove)
  app.get('/user/:userId', UserController.show)
  app.post('/login', UserAuthenController.login)
  app.post('/register', UserAuthenController.register)

  // Blog Management
  app.post('/blog', BlogController.create)
  app.put('/blog/:blogId', BlogController.put)
  app.delete('/blog/:blogId', BlogController.remove)
  app.get('/blog/:blogId', BlogController.show)
  app.get('/blogs', BlogController.index)

  // Upload Management
  app.post('/upload', fileUploadMiddleware, UploadController.upload)

  // Coffee Management (ร้านกาแฟ) 
  // 1. ส่วนดูข้อมูล (GET) ปล่อยให้เป็นสาธารณะ (ไม่ต้องใส่ isAuthenController)
  app.get('/coffees', CoffeeController.index)
  app.get('/coffee/:coffeeId', CoffeeController.show)

  // 2. ส่วนแก้ไขข้อมูล (POST, PUT, DELETE) ต้องใส่ isAuthenController ดักไว้ก่อน
  app.post('/coffee', isAuthenController, CoffeeController.post)
  app.put('/coffee/:coffeeId', isAuthenController, CoffeeController.put)
  app.delete('/coffee/:coffeeId', isAuthenController, CoffeeController.delete)
}