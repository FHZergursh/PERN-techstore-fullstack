import {create} from 'zustand'
import axios from 'axios'

const BASE_URL = "http://localhost:3005"

export const useProductStore = create((set, get) => ({
  products:[],
  loading:false,
  error:null,

  fetchProducts: async () => {
    set({loading: true});
    try {
      const response = await axios.get(`${BASE_URL}/api/products`)
      set({products:response.data.data, error:null})

    } catch (err) {
      set({message: err})
    } finally {
      set({loading: false})
    }
  }

}))