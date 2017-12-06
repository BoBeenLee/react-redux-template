
action

- counter
    COUNTER : 비동기 요청 액션 생성자 FETCH, SUCCESS, FAILURE 액션 타입 생성.
    fetchData : fetch, success, failure 의 액션을 담고 있음.

reducers
    counter : 카운터 값
    loading : 로딩 상태 값

sagas
    loaded : 비동기 요청 loaded generator function을 yield* 하여 실행한다.
    loading : FETCH, SUCCESS, FAILURE 액션 요청이 할 경우, loading 갱신.