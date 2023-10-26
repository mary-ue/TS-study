const div = (a: number, b: number, rouding?: true): number => {
  const res = a / b;

  if (rouding) {
    return Math.round(res);
  }

  return res;
}

div(15, 4, true);
div(15, 3);
div(10, 2);

type Student = {
  firstname: string;
  lastname: string;
  age: number;
  bornCity?: string;
}

type HttpResponsePending = {
  status: 'pending';
};

type HttpResponseSuccess = {
  status: 'success';
  data: [];
};

type HttpResponseFailed = {
  status: 'failed';
  error: string;
};

// type HttpResponse = HttpResponsePending | HttpResponseSuccess | HttpResponseFailed;
// то же самое, но немного меняется синтаксис
type HttpResponse = 
  | HttpResponsePending 
  | HttpResponseSuccess 
  | HttpResponseFailed;

const fetchData = (res: HttpResponse): void => {
  if (res.status === 'success') {

  }

  if (res.status === 'failed') {
    
  }

  if (res.status === 'pending') {
    
  }
}
