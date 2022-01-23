export interface QuestionInterface{  //export 뜻은 바깥에서 함수를 부를 수 있게 노출하는 것
    uuid: string;
    title: string;
    qtype: string;
    desc: string;
    options: Array<SelectOptionInterface>;

  }

export interface SelectOptionInterface{
    uuid: string;
    title: string;
    desc: string;
  }