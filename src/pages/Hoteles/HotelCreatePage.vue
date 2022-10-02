<template>
    <article class="shadow p-4 mb-5 bg-body rounded">
        <div class="p-4">
            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                    <div class="navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-item nav-link ms-3 active" aria-current="page" href="#">
                                    <i class="bi bi-house-fill me-1"></i>Inicio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/hoteles" class="nav-item nav-link ms-3" aria-current="page" href="#">
                                    <i class="bi bi-chevron-right me-1"></i>Hoteles</router-link>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link text-primary fw-bold  active"><i
                                        class="bi bi-chevron-right me-1"></i>Crear nuevo
                                    hotel</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="row">
                <div class="col ms-3">
                    <h1 class="fs-3"><i class="bi bi-bank me-2"></i>Crear un nuevo hotel</h1>
                </div>
                <div class="container p-4">
                    <form class="row" method="POST" id="formulario" enctype="multipart/form-data">
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="" class="form-label">Nombre</label>
                                <input type="text" name="names" id="names" class="form-control">
                            </div>
                        </div>
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="" class="form-label">NIT</label>
                                <input type="text" name="nit" id="nit" class="form-control">
                            </div>
                        </div>
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="" class="form-label">Dirección</label>
                                <input type="text" name="direccion" id="direccion" class="form-control">
                            </div>
                        </div>
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="" class="form-label">Número de habitaciones</label>
                                <input type="number" name="habitaciones" id="habitaciones" class="form-control">
                            </div>
                        </div>
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <label for="" class="form-label">Ciudad</label>
                            <select name="ciudad" id="ciudad" class="form-control select-picker">
                                <option value="" selected hidden></option>
                                <option value="1">MONTERIA</option>
                                <option value="2">BARRANQUILLA</option>
                                <option value="3">MEDELLIN</option>
                                <option value="4">BOGOTA</option>
                            </select>
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <a href="hoteles.html">
                                <button type="button" id="btn_cancel" class="btn btn-danger row-3 mt-2"><i
                                        class="bi bi-x-circle"></i>
                                    Regresar</button>
                            </a>
                            <button type="submit" id="btn_save" class="btn btn-success row-3 mt-2"><i
                                    class="bi bi-plus-circle"></i>
                                Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </article>
</template>