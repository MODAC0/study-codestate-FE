# 두 개의 Docker 이미지를 다루는 방식 연습 (실습용 클라이언트 이미지)

## 3-Tier 배포 스프린트와의 차이점

- `Main.js` 파일에 퀴즈에 대한 정답이 있습니다.

## 빌드시 주의 점

- ⚠️ 항상 멀티 아키텍처로 빌드해야 합니다.
	- `linux/amd64`, `linux/arm64`를 반드시 포함하세요.
	- [레퍼런스](https://docs.docker.com/desktop/multi-arch/)
