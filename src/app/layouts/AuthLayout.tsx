import { Outlet } from "react-router";
import { Card, Center, Container } from "@mantine/core";

const AuthLayout = () => {
  return (
    <Container mih="100vh" fluid>
      <Center mih="100vh">
        <Card w={300} shadow="sm" padding="lg" radius="md" withBorder>
          <Outlet />
        </Card>
      </Center>
    </Container>
  );
};

export default AuthLayout;
