<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DanhMucController;
use App\Http\Controllers\KhachHangController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Auth routes
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/logout', [AuthController::class, 'logout']);
Route::middleware(['authRole:Admin,QuanLyCuaHang'])->group(function () {
// DanhMuc (Categories) CRUD routes
Route::get('/danh-muc', [DanhMucController::class, 'index']); // Lấy danh sách danh mục
Route::post('/danh-muc', [DanhMucController::class, 'store']); // Tạo danh mục
Route::get('/danh-muc/{id}', [DanhMucController::class, 'show']); // Lấy chi tiết danh mục
Route::post('/danh-muc/{id}', [DanhMucController::class, 'update']); // Cập nhật danh mục
Route::delete('/danh-muc/{id}', [DanhMucController::class, 'destroy']); // Xóa danh mục
});