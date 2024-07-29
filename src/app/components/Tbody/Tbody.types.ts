export interface TbodyTypes {
  customerData: customerData[]
  isLoading: boolean
}

export interface customerData {
  name: string
  company: string
  phone: string
  email: string
  country: string
  status: string
}
