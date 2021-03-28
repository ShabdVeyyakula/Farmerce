
function loadAuctionItems() {
    firebase.firestore().collection("Auction").get().then(function (docs){

        docs.forEach((value) => {
            var data = value.data();

            var auctionItem = `
                <div class="auction-item" style="border-style: solid; border-color: #141414; border-width: 2px; height: 300px; width: 220px; margin-top: 5%; margin-left: 5%;" data-toggle="modal" data-target="#exampleModal">
                    <div class="col">
                        <div class="row">
                            <div style="border-style: solid; border-left-color: #83c264; width: 100px; height: 40px; margin-top: 10%; margin-left: 6%; background-color:#191919 ; color: #191919;">
                                <h4 style="color: white; margin-left: 10%; ">$1.47</h4>
                            </div>

                            <h6 style="margin-top: 15%; margin-left: 5%; color: #525252; font-size: 13px;">${data.item}</h6>

                        </div>


                        <div class="d-flex justify-content-center">

                            <div style="margin-top: 17%; margin-left: 8%;">
                                <div class="row">
                                    <div style="height: 50px; width: 90px; background-color: #191919; border-radius: 8px;">
                                        <div class="col">
                                            <center>
                                                <p style="color: white; margin-top: 5%;">$${data.starting}</p>
                                            </center>
                                            <center>
                                                <p style="color: white; font-size: 10px; margin-top: -30%;">Starting Bid</p>
                                            </center>
                                            
                                        </div>
                                    
                                    </div>

                                    <div style="width: 9px; height: 10px;"></div>

                                    <div style="height: 50px; width: 90px; background-color: #191919; border-radius: 8px;">
                                        <div class="col">
                                            <center>
                                                <p style="color: white; margin-top: 5%;">$${data.change}</p>
                                            </center>
                                            <center>
                                                <p style="color: white; font-size: 10px; margin-top: -30%;">Change</p>
                                            </center>
                                            
                                        </div>
                                    
                                    </div>

                                    <div style="width: 9px; height: 10px;"></div>


                                    <div style="height: 50px; width: 90px; background-color: #191919; border-radius: 8px; margin-top: 9px;">
                                        <div class="col">
                                            <center>
                                                <p style="color: white; margin-top: 5%;">$${data.bidders}</p>
                                            </center>
                                            <center>
                                                <p style="color: white; font-size: 10px; margin-top: -30%;">Bidders</p>
                                            </center>
                                            
                                        </div>
                                    
                                    </div>

                                    <div style="width: 9px; height: 10px;"></div>


                                    <div style="height: 50px; width: 90px; background-color: #191919; border-radius: 8px; margin-top: 9px;">
                                        <div class="col">
                                            <center>
                                                <p style="color: white; margin-top: 5%;">$${data.list}</p>
                                            </center>
                                            <center>
                                                <p style="color: white; font-size: 10px; margin-top: -30%;">List</p>
                                            </center>
                                            
                                        </div>
                                    
                                    </div>

                                    <div style="width: 10px; height: 10px;"></div>
                            </div>



                            </div>





                            
                        </div>

                        <div style="margin-left: 3%;">
                            <p style="color: #3f4044; font-size: 12px; margin-left: 1%; margin-top: 10%;">Ends in 8 days</p>
                            <p style="color: white; font-size: 20px; margin-top: -10%; ">Villagers</p>
                        </div>

                        

                        
                    </div>


                    </div>


                    
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            `


            $('#auction-item-list').append(auctionItem);
        });
    });
};