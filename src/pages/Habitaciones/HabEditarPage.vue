<template>
    <article class="shadow p-4 mb-5 bg-body rounded">
        <div class="p-4">
            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                    <div class="navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-item nav-link ms-3 active" aria-current="page" href="#">
                                    <i class="bi bi-house-fill me-1"></i>Inicio
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/hoteles" class="nav-item nav-link ms-3" aria-current="page" href="#">
                                    <i class="bi bi-chevron-right me-1"></i>Hoteles
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/habitaciones" class="nav-item nav-link ms-3" aria-current="page"
                                    href="#">
                                    <i class="bi bi-chevron-right me-1"></i>Hotel
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link text-primary fw-bold  active"><i
                                        class="bi bi-chevron-right me-1"></i>Actualizar habitación</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div class="p-4">
                <div class="row">
                    <div class="col d-flex">
                        <i class="bi bi-bank me-2 fs-1"></i>
                        <div>
                            <h1 class="fs-3">GRAN HOTEL 2</h1>
                            <h9>Numero de habitaciones: 55</h9>
                        </div>
                    </div>
                </div>
                <div class="container mt-3">
                    <form class="row" method="POST" id="formulario" enctype="multipart/form-data">
                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2">
                            <label for="" class="form-label">Tipo de habitación</label>
                            <select name="gender" id="gender" class="form-control select-picker">
                                <option value="" hidden></option>
                                <option value="1" selected>JUNIOR</option>
                                <option value="2">ESTANDAR</option>
                                <option value="4">SUITE</option>
                            </select>
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2">
                            <label for="" class="form-label">Acomodación</label>
                            <select name="gender" id="gender" class="form-control select-picker">
                                <option value="" hidden></option>
                                <option value="1" selected>TRIPLE</option>
                                <option value="2">DOBLE</option>
                                <option value="3">SENCILLA</option>
                                <option value="4">CUADRUPLE</option>
                            </select>
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="" class="form-label">Cantidad</label>
                                <input type="number" name="cantidad" id="cantidad" class="form-control" value="10">
                            </div>
                        </div>

                        <div class="form-group d-flex justify-content-between">
                            <button type="submit" id="btn_save" class="btn btn-success row-3 mt-2"><i
                                    class="bi bi-arrow-clockwise"></i> Actualizar</button>
                            <router-link to="/habitaciones" class="btn btn-danger row-3 mt-2" aria-current="page"
                                href="#">
                                <i class="bi bi-x-circle"></i>Regresar
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </article>
</template>