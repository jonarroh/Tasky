export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      importantdates: {
        Row: {
          date: string
          description: string | null
          id: number
          title: string
          userid: number | null
        }
        Insert: {
          date: string
          description?: string | null
          id?: number
          title: string
          userid?: number | null
        }
        Update: {
          date?: string
          description?: string | null
          id?: number
          title?: string
          userid?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "importantdates_userid_fkey"
            columns: ["userid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks: {
        Row: {
          assigneduserid: number | null
          creationdate: string
          description: string | null
          duedate: string | null
          id: string
          status: string
          taskimage: string | null
          title: string
        }
        Insert: {
          assigneduserid?: number | null
          creationdate: string
          description?: string | null
          duedate?: string | null
          id: string
          status: string
          taskimage?: string | null
          title: string
        }
        Update: {
          assigneduserid?: number | null
          creationdate?: string
          description?: string | null
          duedate?: string | null
          id?: string
          status?: string
          taskimage?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_assigneduserid_fkey"
            columns: ["assigneduserid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          email: string
          id: number
          lasttokengenerated: string | null
          password: string
          sessiontoken: string | null
          username: string
        }
        Insert: {
          email: string
          id?: number
          lasttokengenerated?: string | null
          password: string
          sessiontoken?: string | null
          username: string
        }
        Update: {
          email?: string
          id?: number
          lasttokengenerated?: string | null
          password?: string
          sessiontoken?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
