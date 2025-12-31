import Api from '@/services/Api'

export default {
  upload (formData) {
    // ส่ง header 'multipart/form-data' เพื่อบอก Server ว่าเป็นการส่งไฟล์
    return Api().post('upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}