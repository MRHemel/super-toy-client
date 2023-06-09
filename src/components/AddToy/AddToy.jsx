import React from 'react';
import Swal from 'sweetalert2';

const AddToy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const seller = form.seller.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const category = form.category.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const userToy = {
            name, email, photo, seller, price, ratings, category, description, quantity
        }
        console.log(userToy)

        fetch('http://localhost:5000/addingtoy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You Added a toy successfully!',
                        'success'
                    )
                }
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add Your Toy now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleAddToy}>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter toy name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter seller name" name='seller' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter seller's email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Enter toy price" name='price' className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Enter toy's photo url" name='photo' className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" placeholder="Enter available quantity" name='quantity' className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="text" placeholder="Enter ratings" name='ratings' className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub category</span>
                                    </label>
                                    <input type="text" placeholder="Enter Sub category" name='category' className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea type="text-are" placeholder="Enter toy's description" name='description' className="input input-bordered" />

                                </div>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Add Toy" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;