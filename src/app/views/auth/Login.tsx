import {
  Button,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router";
import { validateEmail, validatePassword } from "../../../utils/validation";

const Login = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: validateEmail,
      password: validatePassword
    },
  });
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Title ta="center">Log in</Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          visible={visible}
          onVisibilityChange={toggle}
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <NavLink to="/register" style={{
          textDecoration: 'none',
          color: 'inherit'
        }}>
          <Text mt={4} size="sm">
            Register
          </Text>
        </NavLink>

        <Group justify="center" mt="md">
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </>
  );
};

export default Login;
