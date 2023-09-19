<template>
    <div class="landing-main">
        <div class="landing-content">
            <b-card class="landing-head">
                <img src="@/assets/images/logo.jpg" />
                <h1>Sabah Softwood Berhad</h1>
            </b-card>
            <div class="landing-body">
                <b-container>
                    <b-row>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <router-link to="/login">
                                    <div class="card-body">
                                        <i class="mdi mdi-tree-outline"></i>
                                        <h4 class="card-title">HRM</h4>
                                    </div>
                                </router-link>
                            </div>
                        </b-col>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <router-link to="/login">
                                    <div class="card-body">
                                        <i class="mdi mdi-gate-arrow-right"></i>
                                        <h4 class="card-title">Finance</h4>
                                    </div>
                                </router-link>
                            </div>
                        </b-col>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <router-link to="/login">
                                    <div class="card-body">
                                        <i class="mdi mdi-gas-station-outline"></i>
                                        <h4 class="card-title">Palm Oil</h4>
                                    </div>
                                </router-link>
                            </div>
                        </b-col>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <router-link to="/login">
                                    <div class="card-body">
                                        <i class="mdi mdi-palm-tree"></i>
                                        <h4 class="card-title">Tree Plant</h4>
                                    </div>
                                </router-link>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>