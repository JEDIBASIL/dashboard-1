import { Button, TextInput, Textarea } from '@mantine/core'
import "./style.css"
import { DropZoneCard } from '@/components'
function AddProduct() {
    return (
        <div className='add_product_container'>
            <div className="page_bar">
                <h2>Add Product</h2>
            </div>
            <div className="add_product_content">
                <div className="fields">
                    <div className="fields_content">
                        <div> <TextInput label='Product name' /> </div>
                        <div> <TextInput label='Quantity' /> </div>
                        <div> <TextInput label='Discount prize' /> </div>
                        <div> <TextInput label='Actual prize' /> </div>
                        <div> <Textarea label={"Description"} /> </div>
                        <Button mt={10} size={"xs"}>Add Product</Button>
                    </div>
                </div>

                <div className="images_container">
                    <DropZoneCard />
                </div>
            </div>
        </div>
    )
}

export default AddProduct