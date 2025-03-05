import { Button, Group, PasswordInput, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { NavLink } from 'react-router'
import { validateEmail, validatePassword } from '../../../utils/validation'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: validateEmail,
      password: validatePassword
    }
  })
  const [visible, { toggle }] = useDisclosure(false)

  return (
    <>
      <Title ta="center">{t('auth.login')}</Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          visible={visible}
          onVisibilityChange={toggle}
          key={form.key('password')}
          {...form.getInputProps('password')}
        />
        <NavLink
          to="/register"
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <Text
            mt={4}
            size="sm"
          >
            {t('auth.register')}
          </Text>
        </NavLink>

        <Group
          justify="center"
          mt="md"
        >
          <Button type="submit">{t('auth.login')}</Button>
        </Group>
      </form>
    </>
  )
}

export default Login
