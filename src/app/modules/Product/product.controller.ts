import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ProductServices } from "./product.service";













const addProduct = catchAsync(async(req, res) => {
    const result =  await  ProductServices.addProductIntoDb(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Product Added Successfully',
        data: result
    })
}

);
const getAllProducts = catchAsync(async(req, res) => {
    const query = req.query;
    const result =  await  ProductServices.getAllProductsFromDb(query);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'All products retrieved successfully!',
        data: result
    })
}

);
const updateProduct = catchAsync(async(req, res) => {
    const {_id} = req.params;

    const result =  await  ProductServices.updateProductIntoDB(_id, req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Product updated successfully!',
        data: result
    })
});

const deleteProduct = catchAsync(async(req, res) => {
    const {id} = req.params;

    const result =  await  ProductServices.deleteSingleItemFromDB(id );
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Product deleted successfully!',
        data: result
    })
});
const deleteMultipleProducts = catchAsync(async (req, res) => {
    const { ids } = req.body; // Assuming you send an array of IDs in the request body
    const result = await ProductServices.deleteMultipleItemsFromDB(ids);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Products deleted successfully!',
      data: result
    });
  });
  

export const  ProductController = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    deleteMultipleProducts
    }