# 14장 순차적 코드 구성하기

**목차**

- **14.1 순서가 중요한 명령문**
- **14.2 순서가 중요하지 않은 명령문**

## 14.1 순서가 중요한 명령문

정렬하기 가장 쉬운 순차적 명령문은 순서가 중요한 명령문이다.

```
// 명령문의 순서가 중요한 예제
data = ReadData();
results = CalculateResultsFromData(data);
PrintResults(result);
```

<br>
위의 코드를 보면 순서대로 진행되어야 한다는 것을 한번에 알 수 있다.

데이터를 읽어 data 변수에 저장하고, data로 계산한 값을 results 변수에 넣고 이를 출력해야 한다.

만약 중간에 순서가 바뀌면 원하는 결과를 얻지 못할 것을 코드를 읽기만 해도 알 수 있다.

<br>

아래 코드는 명령문의 순서가 중요한지 알기 어려운 코드 예시다

```
// 명령문의 순서가 중요하지만 덜 분명한 예제
revenue.ComputeMonthly();
revenue.ConputeQuarterly();
revenuew.ComputeAnnual();
```

<br>
회계에 대해 알고 있는 사람은 당연히 순서를 알지만 나같은 회알못들은 이 순서대로 실행해야 되는지, 아니면 바꿔서 실행해도 되는지 알 방법이 없다.

<br><br>

**명령문 배치와 연관된 간단한 지침**

- 의존성이 분명하게 보이게 코드를 구성하라.
- 의존성이 분명하게 보이게 루틴의 이름을 작성하라.
- 의존성을 분명히 하기 위해서 루틴 매개변수를 사용하라.
- 의존성이 분명하지 않은 부분은 주석으로 문서화하라.
- 어설션이나 오류 처리 코드로 의존성을 검사하라.

```
// 데이터가 순서의 의존성을 말해주는 예제
InitializeExpenseData(expenseData)
ComputeMarketingExpense(expenseData)
ComputeSalesExpense(expenseData)
ComputeTravelExpense(expenseData)
ComputePersonnelExpense(expenseData)
DisplayExpenseSummary(expenseData)
```

<br>
위 처럼 매개변수를 사용하면 데이터가 순서 의존성을 가진다고 짐작할 수 있다.

더욱 순서 의존성을 명확하게 표현하기 위해서는 아래의 코드처럼 작성하면 된다.

```
expenseData = InitializeExpenseData(expenseData)
expenseData = ComputeMarketingExpense(expenseData)
expenseData = ComputeSalesExpense(expenseData)
expenseData = ComputeTravelExpense(expenseData)
expenseData = ComputePersonnelExpense(expenseData)
DisplayExpenseSummary(expenseData)
```

<br>
각 루틴의 반환 값이 expenseData에 들어가고, 해당 변수로 다음 루틴을 호출하므로 이는 순서 의존성이 있는 것이 명확하다.

## 14.2 순서가 중요하지 않은 명령문

### 코드를 하향식으로 읽을 수 있도록 개발

순서가 중요하지 않은 명령문의 경우 **코드를 하향식으로 읽을 수 있도록 개발**하는 것이 좋다.

코드를 읽어 나갈 때 위에 작성한 코드로 다시 올라가서 확인해야 하는 경우가 많아지면 이를 더 나은 구조로 개선할 수 있는 방법에 대해 생각해보아야 한다.

아래의 예제를 보면 이해하기 더 쉬울 것이다.

```
// 코드를 이리저리 살펴보아야 하는 예제
MarketingData marketingData;
SalesData salesData;
TravelData travelData;

travelData.ComputeQuarterly();
salesData.ComputeQuarterly();
marketingData.ComputeQuarterly();

salesData.ComputeAnnual();
marketingData.ComputeAnnual();
travelData.ComputeAnnual();

salesData.Print();
travelData.Print();
marketingData.Print();
```

<br>
만약 내가 marketingData가 어떻게 출력되는지 보려면 위에서 사용된 모든 marketingData를 추적해야 한다.

위의 코드를 아래의 코드로 수정하면 데이터를 추적하기가 훨씬 수월해 질 것이다.

```
MarketingData marketingData;
marketingData.ComputeQuarterly();
marketingData.ComputeAnnual();
marketingData.Print();

SalesData salesData;
salesData.ComputeQuarterly();
salesData.ComputeAnnual();
salesData.Print();

TravelData travelData;
travelData.ComputeQuarterly();
travelData.ComputeAnnual();
travelData.Print();
```

<br>
위의 코드 처럼 작성하면 우리가 이전에 변수에 대해 읽었을 때, 변수의 범위를 줄일 수 있는 장점이 있다. 이로 인해 코드를 읽기 쉽고, 실수도 줄일 수 있다.

추가로 marketData, salesData, travelData 3부분을 루틴으로 쪼갤 수도 있을 것이다.

### 연관된 명령문 그룹화하기

> 연관된 명령문을 함께 둔다. 이 명령문들은 같은 데이터를 처리하거나 비슷한 작업을 수행하거나 각 명령문의 처리 순서에 의존하기 때문에 관련이 있을 수 있다.
>
> 연관된 명령문이 잘 모여있는지 확인하는 가장 쉬운 방법은 루틴 목옥을 출력하고 연관된 명령문 주위에 상자를 그려보는 것이다. 명령문이 잘 정렬되어 있다면 상자가 서로 겹치지 않을 것이다.
>
> 관련 명령문을 그룹화하고 나면 서로 아주 밀접하게 관련되어 있으면서도 전후 명령문과는 아무런 관계가 없는 명령문을 발견하게 될 것이다. 그런 경우는 밀접하게 연관된 명령문을 별도의 루틴으로 리팩터링한다.
