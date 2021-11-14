import { Button, Dropdown, Menu } from 'antd'
import styled from '@emotion/styled'
import { Row } from 'components/lib'
import { useAuth } from 'context/auth-context'
import { ProjectListScreen } from 'screens/project-list'
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg'

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
          <HeaderItem>项目</HeaderItem>
          <HeaderItem>用户</HeaderItem>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={'logout'}>
                  <Button type={'link'} onClick={logout}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type={'link'} onClick={(e) => e.preventDefault()}>
              Hi,{user?.name}
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  )
}

const HeaderItem = styled.h3`
  margin-right: 3rem;
`

// temporal dead zone(暂时性死区)
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
const Main = styled.main`
  display: flex;
  overflow: hidden;
`
