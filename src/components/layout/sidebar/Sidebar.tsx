import "./style.css"
import Link from 'next/link'
import { GrHomeRounded, GrNotification,GrGroup, GrCart, GrSettingsOption, GrShop, GrMailOption, GrProjects, GrAdd, GrSearch } from "react-icons/gr";
import { ActionIcon, Avatar, Flex, Text, TextInput } from '@mantine/core';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo">
        <a href="/">Generic</a>
      </div>
      <Flex align={"center"} gap={10} className="user_profile">
        <Avatar src={"https://img.freepik.com/free-photo/horizontal-shot-happy-black-man-uses-modern-mobile-phone-gestures-with-hand-exclaims-from-positive-emotions-gets-nice-message-wears-black-t-shirt_273609-34626.jpg?size=626&ext=jpg&uid=R61172914&ga=GA1.1.2011866263.1702242450&semt=ais"} />
        <div className="details">
          <Text fw={500} size={"14px"}>John Doe</Text>
          <Text size={"12px"}>johndoe@gmail.com</Text>
        </div>
      </Flex>

      <menu>
      <TextInput leftSection={<GrSearch />} mb={10} size="sm" placeholder="Search" />
        <h5>Menu</h5>
        <ul>
          <li>
            <Link href={"/"}>
              <ActionIcon size={24} variant="light"><GrHomeRounded /></ActionIcon>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href={"/notifications"}>
            <ActionIcon size={24} variant="light" color="red"><GrNotification /></ActionIcon>
              <span> Notifications</span>
            </Link>
          </li>
          <li>
            <Link href={"/users"}>
            <ActionIcon size={24} variant="light" color="orange"><GrGroup /></ActionIcon>
              <span> Customers</span>
            </Link>
          </li>
          <li>
            <Link href={"/products"}>
            <ActionIcon size={24} variant="light" color="green"><GrShop /></ActionIcon>
              <span> Products</span>
            </Link>
          </li>
          <li>
            <Link href={"/add-product"}>
            <ActionIcon size={24} variant="light" color="indigo"><GrAdd /></ActionIcon>
              <span> Add Product</span>
            </Link>
          </li>
          <li>
            <Link href={"/categories"}>
            <ActionIcon size={24} variant="light" color="violet"><GrProjects /></ActionIcon>
              <span> Categories</span>
            </Link>
          </li>
          <li>
            <Link href={"/orders"}>
            <ActionIcon size={24} variant="light" color="lime"><GrCart /></ActionIcon>
              <span> Orders</span>
            </Link>
          </li>

          <li>
            <Link href={"/send-mail"}>
            <ActionIcon size={24} variant="light" color="grape"><GrMailOption /></ActionIcon>
              <span>Send Mail</span>
            </Link>
          </li>

          <li>
            <Link href={"/settings"}>
            <ActionIcon size={24} variant="light" color="cyan"><GrSettingsOption /></ActionIcon>
              <span> Settings</span>
            </Link>
          </li>
        </ul>
      </menu>
    </div>
  )
}

export default Sidebar