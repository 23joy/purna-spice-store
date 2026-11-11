"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";

export default function AddmodalProducts() {
    const [benefits, setBenefits] = useState([
        { title: "", description: "", icon: "" },
    ]);

    const addBenefit = () => {
        setBenefits([
            ...benefits,
            { title: "", description: "", icon: "" },
        ]);
    };

    const removeBenefit = (index) => {
        setBenefits(benefits.filter((_, i) => i !== index));
    };

    const handleBenefitChange = (index, field, value) => {
        const updatedBenefits = [...benefits];
        updatedBenefits[index][field] = value;
        setBenefits(updatedBenefits);
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const product = Object.fromEntries(formData.entries())

        product.benefits = benefits;

        const res=await fetch("http://localhost:7001/product", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data=await res.json()
        console.log(data)
    };

    return (
        <Modal>
            <Button variant="secondary">Open Contact Form</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we'll get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Product Name */}
                                    <TextField className="w-full" name="name" variant="secondary">
                                        <Label>Product Name</Label>
                                        <Input placeholder="Enter product name" required />
                                    </TextField>

                                    {/* Price */}
                                    <TextField className="w-full" name="price" type="number" variant="secondary">
                                        <Label>Price (৳)</Label>
                                        <Input placeholder="Enter price" required />
                                    </TextField>

                                    {/* Weight */}
                                    <TextField className="w-full" name="weight" variant="secondary">
                                        <Label>Weight</Label>
                                        <Input placeholder="২০০ গ্রাম" required />
                                    </TextField>

                                    {/* Description */}
                                    <TextField className="w-full" name="description" variant="secondary">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter product description" required />
                                    </TextField>

                                    {/* Category */}
                                    <TextField className="w-full" name="category" variant="secondary">
                                        <Label>Category</Label>
                                        <Input placeholder="গুঁড়া মসলা" required />
                                    </TextField>

                                    {/* Stock */}
                                    <TextField className="w-full" name="stock" type="number" variant="secondary">
                                        <Label>Stock</Label>
                                        <Input placeholder="Enter stock quantity" required />
                                    </TextField>

                                    {/* Image */}
                                    <TextField className="w-full" name="Image" variant="secondary">
                                        <Label>Product Image URL</Label>
                                        <Input placeholder="Enter image URL" required />
                                    </TextField>

                                    {/* Benefits */}
                                    <div className="space-y-4">

                                        <div className="flex justify-between items-center">
                                            <h2 className="text-xl font-semibold">Product Benefits</h2>

                                            <Button type="button" onPress={addBenefit}>
                                                + Add More
                                            </Button>
                                        </div>

                                        {benefits.map((benefit, index) => (
                                            <div
                                                key={index}
                                                className="border border-gray-300 rounded-xl p-4 space-y-3"
                                            >
                                                <h3 className="font-semibold">
                                                    Benefit {index + 1}
                                                </h3>

                                                <TextField className="w-full" variant="secondary">
                                                    <Label>Title</Label>
                                                    <Input
                                                        placeholder="বিশেষ বৈশিষ্ট্য"
                                                        value={benefit.title}
                                                        onChange={(e) =>
                                                            handleBenefitChange(index, "title", e.target.value)
                                                        }
                                                        required
                                                    />
                                                </TextField>

                                                <TextField className="w-full" variant="secondary">
                                                    <Label>Description</Label>
                                                    <Input
                                                        placeholder="Enter benefit description"
                                                        value={benefit.description}
                                                        onChange={(e) =>
                                                            handleBenefitChange(index, "description", e.target.value)
                                                        }
                                                        required
                                                    />
                                                </TextField>

                                                <TextField className="w-full" variant="secondary">
                                                    <Label>Icon Name</Label>
                                                    <Input
                                                        placeholder="sparkles"
                                                        value={benefit.icon}
                                                        onChange={(e) =>
                                                            handleBenefitChange(index, "icon", e.target.value)
                                                        }
                                                        required
                                                    />
                                                </TextField>

                                                {benefits.length > 1 && (
                                                    <Button
                                                        type="button"
                                                        variant="danger"
                                                        onPress={() => removeBenefit(index)}
                                                    >
                                                        Remove
                                                    </Button>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Submit */}
                                    <Button type="submit" className="w-full">
                                        Add Product
                                    </Button>

                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>

    );
}