import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages 프로젝트 사이트(https://innopamsolution.github.io/<저장소 이름>/) 하위 경로 배포
// 배포 시 GitHub Actions 가 VITE_BASE=/<저장소 이름>/ 을 넘긴다 — 저장소 이름이 바뀌어도 경로가 따라간다
// 빌드 입력: PC(index.html) · 모바일(mobile.html) 두 HTML — 화면 컴포넌트는 함께 쓴다
declare const process: { env: Record<string, string | undefined> }

export default defineConfig({
  base: process.env.VITE_BASE || '/jeju-snow-dev/',
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: { pc: 'index.html', mobile: 'mobile.html' },
    },
  },
})
