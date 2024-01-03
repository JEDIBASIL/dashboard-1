"use client";
import {
    ActionIcon,
    Table,
    Image,
    Flex,
    Menu,
    Button,
    Checkbox,
    Pagination,
} from "@mantine/core";
import { GrMoreVertical, GrBarChart, GrList, GrProjects } from "react-icons/gr";
import "./style.css"
function Products() {
    const elements = [
        {
            category: "Women",
            id: 6,
            name: "Shirt",
            img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            prize: "$342",
            qty: "4",
        },
        {
            category: "Men",
            id: 5,
            name: "Shirt",
            img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            prize: "$342",
            qty: "4",
        },
        {
            category: "Kids",
            id: 4,
            name: "Shirt",
            img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            prize: "$342",
            qty: "4",
        },
        {
            category: "Bags",
            id: 3,
            name: "Shirt",
            img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            prize: "$342",
            qty: "4",
        },
    ];

    const rows = elements.map(({ id, img, name, prize, qty, category }) => (
        <Table.Tr key={id}>
            <Table.Td>
                <Checkbox />
            </Table.Td>
            <Table.Td>{name}</Table.Td>
            <Table.Td>
                <Image height={40} maw={40} width={40} radius={5} src={img} />
            </Table.Td>
            <Table.Td>{category}</Table.Td>
            <Table.Td>{qty}</Table.Td>
            <Table.Td>{prize}</Table.Td>
            <Table.Td>
                <Menu width={200} position="bottom-end" shadow="md">
                    <Menu.Target>
                        <ActionIcon size={20} color={"gray"}>
                            <GrMoreVertical />
                        </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item
                            onClick={() => console.log(id)}
                            leftSection={<GrBarChart size={18} />}
                        >
                            Update status
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <div className="product_container">
                <div className="page_bar">
                    <h2>Products</h2>
                </div>
                <div className="product_content">
                    <Flex
                        mb={10}
                        justify="space-between"
                        align="center"
                        direction="row"
                        gap={10}
                    >
                        <Button
                            radius={5}
                            leftSection={<GrList size={18} />}
                            variant="default"
                        >
                            Filter
                        </Button>
                        <Flex
                            mb={10}
                            justify="space-between"
                            align="center"
                            direction="row"
                            gap={5}
                        >
                            <ActionIcon size={30} variant={"default"} color={"gray"}>
                                <GrList size={20} color={"gray"} />
                            </ActionIcon>
                            <ActionIcon size={30} variant={"default"} color={"gray"}>
                                <GrProjects size={20} color={"gray"} />
                            </ActionIcon>
                        </Flex>
                    </Flex>
                    <div className="table_container">
                        <Table horizontalSpacing="xs" verticalSpacing="xs" miw={700} layout="fixed">
                            <Table.Tr>
                                <Table.Th>
                                    <Checkbox />
                                </Table.Th>
                                <Table.Th>Product</Table.Th>
                                <Table.Th></Table.Th>
                                <Table.Th>Category</Table.Th>
                                <Table.Th>qty</Table.Th>
                                <Table.Th>Prize</Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Tr>
                            <Table.Tbody>{rows}</Table.Tbody>
                        </Table>
                        <Flex justify={"flex-end"} align={"center"} mt={20}>
                            <Pagination radius={3} size={"xs"} total={10} />
                        </Flex>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
