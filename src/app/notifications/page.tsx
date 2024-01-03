import { ActionIcon, Flex, TextInput } from "@mantine/core"
import "./page.css"
import { GrFolderOpen, GrSearch, GrTrash } from "react-icons/gr"
function Notifications() {
  return (
    <div className='notification_container'>
      <div className="page_bar">
        <h2>Notifications</h2>
      </div>
      <div className="page_content">
      <TextInput mb={10} w={400} leftSection={<GrSearch />} size="sm" placeholder="Search Notification" />
        <div className="notification_content">
          <div className="list">
            <div className="message">
              <p>New Order from james@gmail.com</p>
            </div>
            <div className="date_action_container">
              <p className="date">
                11:40 am
              </p>
              <Flex gap={5} align={"center"} className="actions">
                <ActionIcon variant="light">
                  <GrFolderOpen />
                </ActionIcon>

                <ActionIcon color="red" variant="light">
                  <GrTrash />
                </ActionIcon>
              </Flex>
            </div>
          </div>
          <div className="list">
            <div className="message">
              <p>New Order from james@gmail.com</p>
            </div>
            <div className="date_action_container">
              <p className="date">
                11:40 am
              </p>
              <Flex gap={5} align={"center"} className="actions">
                <ActionIcon variant="light">
                  <GrFolderOpen />
                </ActionIcon>

                <ActionIcon color="red" variant="light">
                  <GrTrash />
                </ActionIcon>
              </Flex>
            </div>
          </div>
          <div className="list">
            <div className="message">
              <p>New Order from james@gmail.com</p>
            </div>
            <div className="date_action_container">
              <p className="date">
                11:40 am
              </p>
              <Flex gap={5} align={"center"} className="actions">
                <ActionIcon variant="light">
                  <GrFolderOpen />
                </ActionIcon>

                <ActionIcon color="red" variant="light">
                  <GrTrash />
                </ActionIcon>
              </Flex>
            </div>
          </div>
          <div className="list">
            <div className="message">
              <p>New Order from james@gmail.com</p>
            </div>
            <div className="date_action_container">
              <p className="date">
                11:40 am
              </p>
              <Flex gap={5} align={"center"} className="actions">
                <ActionIcon variant="light">
                  <GrFolderOpen />
                </ActionIcon>

                <ActionIcon color="red" variant="light">
                  <GrTrash />
                </ActionIcon>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications