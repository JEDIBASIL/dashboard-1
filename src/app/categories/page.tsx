"use client";
import {
    Menu,
    ActionIcon,
    Table,
    Flex,
    Button,
    Modal,
    TextInput,
    Box,
} from "@mantine/core";
import "./style.css";
import { useState } from "react";
import { DropZoneCard } from "@/components";
function CategoriesPage() {
    const [showModal, setShowModal] = useState(false);
    const elements = [
        { id: 1, name: "Women" },
        { id: 2, name: "Men" },
        { id: 3, name: "Kids" },
    ];

    const rows = elements.map(({ id, name }) => (
        <Table.Tr key={id}>
            <Table.Td>{name}</Table.Td>
            <Table.Td>
                <Menu width={200} withArrow position="bottom-end" shadow="md">
                    <Menu.Target>
                        <ActionIcon size={20} variant="light" color={"gray"}></ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item onClick={() => console.log(id)}>Delete</Menu.Item>
                        <Menu.Item onClick={() => console.log(id)}>Edit</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div className="categories_container">
            <Modal
                title={
                    <div className="page_bar" style={{paddingLeft:"0px"}}>
                        <h2>New Category</h2>
                    </div>
                }
                onClose={() => setShowModal(false)}
                opened={showModal}
            >
                <form action="">
                    <Flex direction={"column"} gap={10}>
                        <TextInput label={"Name"} />
                        <div className={"g_card"}>
                            <DropZoneCard />
                        </div>
                        <Button onClick={() => setShowModal(false)} size="xs">
                            Create category
                        </Button>
                    </Flex>
                </form>
            </Modal>
            <div className="page_bar">
                <h2>Categories</h2>
            </div>

            <div className="categories_content">
                <div className="table_container order_table">
                    <Flex justify={"flex-end"}>
                        <Button onClick={() => setShowModal(true)} size="xs">
                            Create new category
                        </Button>
                    </Flex>
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Name</Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;
