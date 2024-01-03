"use client"
import { Flex, Group, Text, rem } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { GrClose, GrImage, GrUpload } from 'react-icons/gr';

function DropZoneCard(props: Partial<DropzoneProps>) {
    return (
        <Dropzone
            onDrop={(files) => console.log('accepted files', files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            {...props}
        >
            <Flex align={"center"} justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                <Dropzone.Accept>
                    <GrUpload size={30} />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <GrClose size={30} />
                </Dropzone.Reject>
                <Dropzone.Idle>
                    <GrImage size={30} />
                </Dropzone.Idle>

                <div>
                    <Text size="sm" inline>
                        Drag images here or click to select files
                    </Text>
                    <Text size="xs" c="dimmed" inline mt={7}>
                        Attach as many files as you like, each file should not exceed 5mb
                    </Text>
                </div>
            </Flex>
        </Dropzone>
    );
}

export default DropZoneCard