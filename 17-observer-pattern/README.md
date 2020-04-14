# Observer pattern(a.k.a. Publish Subscribe pattern)

Observer 패턴은 한 객체(Subject)의 상태가 변하였을 때 그 객체에 의존하는 다른 객체들(Observers)에게 상태가 변하였음을 알리는 패턴이다.

Observer 패턴에는 2가지 방식이 있다:

1. Push 방식: 변화가 발생 했을 때 Observers에게 그 변화를 직접 전달해 주는 방식
2. Pull 방식: 변화가 발생 했음을 알리기만 하고, Observer가 필요한 정보를 직접 가져오는 방식

본 예제에서는 Pull 방식을 이용하여 난수가 변하였음을 Observers에게 알렸다.
