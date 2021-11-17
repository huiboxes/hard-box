import { Table, TableProps } from 'antd'
import dayjs from 'dayjs'
import { User } from 'screens/project-list/search-panel'

export interface Project {
  id: number
  name: string
  personId: number
  pin: boolean
  organization: string
  created: number
}

interface ListProps extends TableProps<Project> {
  users: User[]
}

export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: '名称',
          sorter: (prev, next) => prev.name.localeCompare(next.name),
          render(value, project) {
            return (
              <a href={'/projects/' + project.id.toString()}>{project.name}</a>
            )
          },
        },
        {
          title: '部门',
          dataIndex: 'organization',
        },
        {
          title: '负责人',
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  '未知'}
              </span>
            )
          },
        },
        {
          title: '创建时间',
          dataIndex: 'organization',
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format('YYYY-MM-DD')
                  : '无'}
              </span>
            )
          },
        },
      ]}
      {...props}
    ></Table>
  )
}
