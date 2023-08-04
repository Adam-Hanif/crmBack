const { Router } = require("express");
const { directorController } = require("../controllers/director.controller");
const registerValidation = require("../validations/auth");
const handleValidationErrors = require("../validations/handleValidationErrors");
const authMiddleware = require("../middleware/auth.middleware");
const loginValidation = require("../validations/login");



const router = Router()


//--------------Получение авторизованного User------------------
router.get("/director", authMiddleware, directorController.getMe);

//--------------Регистрация------------------
router.post(
  "/auth",
  registerValidation,
  handleValidationErrors,
  directorController.addDirector
);
//--------------Изменение------------------
router.patch("/director/id", authMiddleware, directorController.getUpdateDirector);
router.get("/director", directorController.getOneUser)
//--------------ВХОД------------------
router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  directorController.login
);


//--------------Удалиние User------------------  
router.delete("/director/:id", authMiddleware, directorController.deleteDirectorById);


module.exports = router;