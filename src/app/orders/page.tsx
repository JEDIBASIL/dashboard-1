"use client"
import { ActionIcon, Button, Checkbox, Flex, Menu, Table, Image, Pagination } from "@mantine/core";
import "./style.css"
function Orders() {
    const elements = [
        { status: "pending", id: 6, product: { name: "Shirt", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }, email: 'john@gmail.com', prize: '$342', qty: '4' },
        { status: "pending", id: 5, product: { name: "Shirt", img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }, email: 'john@gmail.com', prize: '$342', qty: '4' },
        { status: "pending", id: 4, product: { name: "Shirt", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }, email: 'john@gmail.com', prize: '$342', qty: '4' },
        { status: "pending", id: 3, product: { name: "Shirt", img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }, email: 'john@gmail.com', prize: '$342', qty: '4' },
    ];

    const rows = elements.map(({ id, product, email, prize, qty, status }) => (
        <Table.Tr key={id}>
            <Table.Td><Checkbox /></Table.Td>
            <Table.Td>{id}</Table.Td>
            <Table.Td>
                <a href="#">
                    <Flex
                        justify="flex-start"
                        align="center"
                        direction="row"
                        gap={10}
                    >
                        <Image
                            height={40}
                            width={40}
                            maw={40}
                            radius={5}
                            src={product.img}
                        />
                        <span>{product.name}</span>
                    </Flex>
                </a>
            </Table.Td>
            <Table.Td>{email}</Table.Td>
            <Table.Td><Button radius={50} size={"xs"} variant='light'>{status}</Button></Table.Td>
            <Table.Td>{prize}</Table.Td>
            <Table.Td>{qty}</Table.Td>
            <Table.Td>

                <Menu width={200} withArrow position='bottom-end' shadow="md">
                    <Menu.Target>
                        <ActionIcon size={20} color={"gray"}>
                        </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={() => console.log(id)}>
                            Update
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <div className='orders_container'>
                <div className="page_bar">
                    <h2>Orders</h2>
                </div>
                <div className="orders_content">
                    <Flex
                        mb={10}
                        justify="flex-end"
                        align="center"
                        direction="row"
                        gap={10}>

                        <Button radius={5} variant='default'>Filter</Button>
                    </Flex>
                    <div className='table_container'>
                        <Table>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th><Checkbox /></Table.Th>
                                    <Table.Th>Id</Table.Th>
                                    <Table.Th>Product</Table.Th>
                                    <Table.Th>Email</Table.Th>
                                    <Table.Th>Status</Table.Th>
                                    <Table.Th>Prize</Table.Th>
                                    <Table.Th>Qty</Table.Th>
                                    <Table.Th></Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>{rows}</Table.Tbody>
                        </Table>
                        <Flex justify={"flex-end"} align={"center"} mt={20}>
                            <Pagination radius={3} size={"xs"} total={10} />
                        </Flex>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders