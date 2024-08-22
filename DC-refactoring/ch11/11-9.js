/**
 *
 * 명령객체 (commend) : 한 가지의 명령을 수행하는 함수 한 가지만 가지고 있는 클래스
 *
 * 긴 계산하는 함수를 명령객체로 만들어서 필요한 데이터를 영구적으로 보관하여 필요한 명령(동작) 수행
 * 명령객체로 만들어 두면, 필요한 데이터를 객체 안에서 가지고 있다가 점수를 호출해야할 때 execute만 호출하면 됨
 *
 */

export function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuid = scoringGuide;
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (
      this.scoringGuide.stateWithLowCertification(this.candidate.originState)
    ) {
      certificationGrade = "low";
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}

export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
