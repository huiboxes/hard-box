import { useState } from 'react'
import styled from '@emotion/styled'

import { SearchPanel } from './search-panel'
import { List } from './list'
import { useDebounce } from 'utils'
import { useProjects } from 'utils/project'
import { useUsers } from 'utils/user'

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  const debouncedParam = useDebounce(param, 200)
  const { isLoading, data: list } = useProjects(debouncedParam)
  const { data: users } = useUsers()

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      <List
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      ></List>
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
