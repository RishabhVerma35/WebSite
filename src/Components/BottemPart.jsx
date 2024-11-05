const MyComponent = (props) => {
    return (
        <div className="border float-start mt-1">
            <img src="/images/stick.png" alt="" style={{ width: '30px', height: '20px' }} />
            <h5>Hello, this is my component!</h5>
            <p>Welcome to my React application.</p>
        </div>
    );
};

function BootemPart() {
    return (
        <div>
            <div className="px-4 pt-5 my-5 text-center ">
                <h2 className="display-4 fw-bold text-white w-5
                ">ClimeCast is valuable Pre-Acquisition &

                    <br></br> Post-Acquisition</h2>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 text-secondary">Powerful financial incentives to improve building energy efficiency are creating a need to

                        conduct due-diligence both when making property investment & management decisions</p>

                </div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div class="card  border-dark-subtle" style={{ backgroundColor: 'rgb(10, 14, 40)', color: 'white' }}>
                                <div class="card-body">
                                    <h2 class="card-title ">Pre-Acquisition </h2>
                                    <MyComponent />
                                    <MyComponent />
                                    <MyComponent />
                                    <MyComponent />
                               
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card  border-dark-subtle" style={{ backgroundColor: 'rgb(10, 14, 40)', color: 'white' }}>
                                <div class="card-body">
                                    <h2 class="card-title">Post-Acquisition</h2>
                                    <MyComponent />
                                    <MyComponent />
                                    <MyComponent />
                                    <MyComponent />
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BootemPart;
