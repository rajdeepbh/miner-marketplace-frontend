import {
  Box,
  Center,
  Link,
  Text,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRight, Home, Layout, UserCheck } from "react-feather";
import { useRouter } from "next/router";
import { Icon, IconProps, ChevronRightIcon } from "@chakra-ui/icons";
import { RiDashboardFill, RiUserSearchFill } from "react-icons/ri";

const DashboardMenu = () => {
  const router = useRouter();
  return (
    <>
      <Box
        bg="blue.700"
        color="white"
        w="56"
        textAlign="left"
        alignItems="left"
        position="fixed"
        z-index="10"
        h="100%"
        pt="20"
      >
        <VStack alignItems="left" spacing="2" textAlign="left">
          <Link alignItems="center" w="full" p="6" bgColor="blue.600">
            <HStack>
              <Icon as={RiDashboardFill} h={5} w={5} />
              <Text fontSize="lg" paddingLeft="2" fontWeight="medium">
                Dashboard
              </Text>
            </HStack>
          </Link>
          <Link
            p="4"
            alignItems="center"
            onClick={() => router.push("/minerDetails")}
          >
            <HStack>
              <Text size="md" px="2">
                Miner Details
              </Text>
              <ChevronRightIcon h={6} w={6} />
            </HStack>
          </Link>
          <Link
            p="4"
            alignItems="center"
            onClick={() => router.push("/profileSettings")}
          >
            <HStack>
              <Text size="md" px="2">
                Profile Settings
              </Text>
              <ChevronRightIcon h={6} w={6} />
            </HStack>
          </Link>
          <Link
            p="6"
            alignItems="center"
            onClick={() => router.push("/minerList")}
          >
            <HStack>
              <Icon as={RiUserSearchFill} w={5} h={5} />
              <Text fontSize="lg" paddingLeft="2" fontWeight="medium">
                Search Miners
              </Text>
            </HStack>
          </Link>
        </VStack>
      </Box>
    </>
  );
};

export default DashboardMenu;
