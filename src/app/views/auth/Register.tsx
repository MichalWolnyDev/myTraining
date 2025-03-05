import { Button, Group, PasswordInput, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { NavLink } from 'react-router'
import { validateConfirmPassword, validateEmail, validatePassword } from '../../../utils/validation'
import { useTranslation } from 'react-i18next'

const Register = () => {
  const { t } = useTranslation()
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate: {
      email: validateEmail,
      password: validatePassword,
      confirmPassword: validateConfirmPassword
    }
  })
  const [visible, { toggle }] = useDisclosure(false)

  return (
    <>
      <Title ta="center">{t('auth.register')}</Title>
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
        <PasswordInput
          label="Confirm password"
          defaultValue=""
          visible={visible}
          onVisibilityChange={toggle}
          key={form.key('confirmPassword')}
          {...form.getInputProps('confirmPassword')}
        />
        <NavLink
          to="/login"
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <Text
            mt={4}
            size="sm"
          >
            {t('common.back')}
          </Text>
        </NavLink>

        <Group
          justify="center"
          mt="md"
        >
          <Button type="submit">{t('auth.register')}</Button>
        </Group>
      </form>
    </>
  )
}

export default Register
