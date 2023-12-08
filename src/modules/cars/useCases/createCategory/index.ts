import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

// Instanciando o repository
const categoriesRepository = CategoriesRepository.getInstance()

// Instanciando o useCase, passando o repository como argumento
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

// Instanciando o controller passando o useCase como argumento
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
)

export { createCategoryController }
