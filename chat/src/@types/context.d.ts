interface UserContext {
  user: string
}

type ThemeOptions = 'day' | 'night'
interface ThemeContext {
  theme: ThemeOptions
}
