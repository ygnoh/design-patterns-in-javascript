# Decorator pattern

Decorator 패턴은 객체에 필요한 요소를 동적으로 더할 수 있는 패턴이다.
이를 이용해 subclass를 만드는 것보다 더 유연하게 기능을 확장할 수 있다.

다만 다음 사항들은 주의 해야 한다:
- 자잘한 클래스가 많이 추가 될 수 있다.
- 객체를 생성할 때 Decorator로 감싸는 과정이 코드를 복잡하게 만들 수 있다. (Factory pattern 혹은 Builder pattern으로 보완)

본 예제에서는 주어진 문자열에 Decorator 패턴을 적용하여 테두리(border) 문자열을 원하는 대로 추가한다.
