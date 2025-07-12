const exercises = {
  chest: [
    { name: "Push-Up", gif: "gifs/pushup.gif", desc: "BENEFIT: Strengthens chest, shoulders, and triceps using bodyweight.PROCEDURE: Get into plank position, lower your body until chest nearly touches the ground, then push back up." },
    { name: "Barbell Bench Press", gif: "gifs/Barbell-bench.gif", desc: "BENEFIT: Builds overall chest mass and upper body strength.PROCEDURE: Lie on a bench, lower the barbell to your chest, then press it back up to full arm extension." },
     { name: "Incline Dumbbell Press", gif: "gifs/inclinepress.gif", desc: "BENEFIT: Focuses on the upper chest and shoulders.PROCEDURE: Set bench at a 30–45° angle, lower the bar/dumbbells to upper chest, then push back up." },
    { name: "Chest Dips", gif: "gifs/Dips.gif", desc: "BENEFIT: Strengthens lower chest and triceps.PROCEDURE: Hold parallel bars, lean slightly forward, lower your body until elbows are bent 90°, then push back up." },
    { name: "Dumbbell Flyes", gif: "gifs/ChestFly.gif", desc: "BENEFIT: Targets chest muscles and enhances chest definition.PROCEDURE: Lie on a bench, hold dumbbells above chest, lower arms out to the sides in a wide arc, then bring them back up." }
  ],
  arms: [
    { name: "Bicep Curls (Dumbbell)", gif: "gifs/bicepcurl.gif", desc: "BENEFIT: Builds bicep size and peak.PROCEDURE: Hold dumbbells at sides, curl them up while keeping elbows still, then lower slowly." },
    { name: "Tricep Dip", gif: "gifs/tricepdip.gif", desc: "BENEFIT: Strengthens triceps and improves arm definition.PROCEDURE: Place hands behind on a bench, lower body by bending elbows, push back up." },
     { name: "Hammer Curls", gif: "gifs/bicepcurl.gif", desc: "BENEFIT: Targets biceps and forearms for balanced growth.PROCEDURE: Hold dumbbells with neutral grip, curl up, then slowly lower without twisting wrists." },
      { name: "Tricep Pushdowns (Cable)", gif: "gifs/bicepcurl.gif", desc: "BENEFIT: Isolates and defines tricep muscles.PROCEDURE: Grip cable bar, push it down until arms are straight, then return to starting position." },
       { name: "Chin-Ups", gif: "gifs/bicepcurl.gif", desc: "BENEFIT: Builds biceps and back strength.PROCEDURE: Hang from bar with underhand grip, pull chin above bar, then lower with control." }
  ],
  legs: [
    { name: "Squats", gif: "gifs/squats.gif", desc: "BENEFIT: Strengthens quads, hamstrings and glutes; improves balance and core strength.PROCEDURE: Stand with feet shoulder-width apart, lower your hips as if sitting on a chair, then rise back up" },
    { name: "Lunges", gif: "gifs/lunges.gif", desc: "BENEFIT: Enhances balance, tones glutes and thighs, and improves hip flexibility.PROCEDURE: Step forward with one leg, lower your hips until both knees are at 90 degrees, then push back to start." },
    { name: "Calf Raises", gif: "gifs/lunges.gif", desc: "BENEFIT: Strengthens calf muscles and improves ankle stability and endurance.PROCEDURE: Stand tall, slowly raise your heels off the ground, hold for a moment, and lower back down." },
    { name: "Leg Press-Machine ", gif: "gifs/lunges.gif", desc: "BENEFIT: Builds strength in thighs, glutes, and calves with controlled movement.PROCEDURE: Sit on the machine, place feet on the platform, and push upward without locking your knees." },
    { name: "Glute Bridges", gif: "gifs/lunges.gif", desc: "BENEFIT: Activates glutes, strengthens hamstrings, and supports lower back health.PROCEDURE: Lie on your back with knees bent, lift your hips to form a straight line from shoulders to knees, then lower. " }
  ],
  back: [
    { name: "Pull-Up", gif: "gifs/pullup.gif", desc: "BENEFIT: Strengthens upper back, lats, shoulders, and arms.PROCEDURE: Hang from a pull-up bar with palms facing away, pull your body up until chin is over the bar, then lower slowly." },
    { name: "Bent-Over Rows", gif: "gifs/superman.gif", desc: "BENEFIT: Builds mid-back muscles, improves posture, and strengthens biceps.PROCEDURE: Bend slightly forward with a straight back, hold weights, pull them toward your waist, and lower slowly." },
    { name: "Deadlifts", gif: "gifs/pullup.gif", desc: "BENEFIT: Strengthens entire posterior chain—back, glutes, hamstrings, and core.PROCEDURE: Stand with feet hip-width apart, lift barbell from floor by driving through heels and keeping back straight." },
    { name: "fLat Pulldowns (Machine)", gif: "gifs/pullup.gif", desc: "BENEFIT: Isolates and strengthens the latissimus dorsi and upper back.PROCEDURE: Sit at the machine, grip the bar wider than shoulders, pull it to your chest, then let it return slowly." },
    { name: "Superman Stretch", gif: "gifs/pullup.gif", desc: "BENEFIT: Strengthens lower back and improves spinal stability and posture.PROCEDURE: Lie face down, extend arms and legs, lift them off the ground simultaneously, hold briefly, then relax." }
  ],
  abs: [
    { name: "Crunches", gif: "gifs/crunches.gif", desc: "BENEFIT: Targets upper abdominal muscles and strengthens core.PROCEDURE: Lie on your back, knees bent, hands behind head; lift shoulders off the floor using abs, then lower slowly." },
    { name: "Plank", gif: "gifs/plank.gif", desc: "BENEFIT: Builds overall core stability and endurance.PROCEDURE: Get into push-up position on elbows, keep body in a straight line, and hold the position for as long as possible." },
    { name: "Leg Raises", gif: "gifs/plank.gif", desc: "BENEFIT: Strengthens lower abs and improves hip control.PROCEDURE: Lie on your back, keep legs straight, raise them up to 90°, then lower without touching the floor." },
    { name: "Bicycle Crunches", gif: "gifs/plank.gif", desc: "BENEFIT: Works upper, lower abs, and obliques effectively.PROCEDURE: Lie on back, alternate touching elbow to opposite knee in a pedaling motion while keeping core engaged." },
    { name: "Russian Twists", gif: "gifs/plank.gif", desc: "BENEFIT: Strengthens obliques and improves rotational movement.PROCEDURE: Sit with knees bent, lean back slightly, twist torso side to side while holding a weight or hands together." }
  ]
};

function loadExercises() {
  const bodyPart = document.getElementById('bodyPartSelect').value;
  const exerciseSelect = document.getElementById('exerciseSelect');
  const exerciseListSection = document.getElementById('exerciseListSection');
  const tutorialSection = document.getElementById('tutorialSection');

  if (bodyPart) {
    exerciseSelect.innerHTML = `<option value="">--Choose Exercise--</option>`;
    exercises[bodyPart].forEach((ex, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = ex.name;
      exerciseSelect.appendChild(opt);
    });
    exerciseListSection.classList.remove('hidden');
    tutorialSection.classList.add('hidden');
  } else {
    exerciseListSection.classList.add('hidden');
    tutorialSection.classList.add('hidden');
  }
}

function loadTutorial() {
  const bodyPart = document.getElementById('bodyPartSelect').value;
  const exerciseIndex = document.getElementById('exerciseSelect').value;

  if (exerciseIndex !== "") {
    const exercise = exercises[bodyPart][exerciseIndex];
    document.getElementById('exerciseGif').src = exercise.gif;
    document.getElementById('exerciseDesc').textContent = exercise.desc;
    document.getElementById('tutorialSection').classList.remove('hidden');
    resetTimer();
  }
}

let timerInterval;
let time = 30;
let reps = 10;

function resetTimer() {
  time = 30;
  const selectedReps = parseInt(document.getElementById('repsSelect').value);
  reps = selectedReps;
  document.getElementById('time').textContent = "00:30";
  document.getElementById('reps').textContent = reps;
  clearInterval(timerInterval);
}

function startTimer() {
  clearInterval(timerInterval);
  time = 30;
  reps = parseInt(document.getElementById('repsSelect').value);

  let currentTime = time;
  let currentReps = reps;

  document.getElementById('time').textContent = `00:${currentTime < 10 ? '0' : ''}${currentTime}`;
  document.getElementById('reps').textContent = currentReps;

  timerInterval = setInterval(() => {
    currentTime--;

    if (currentTime < 0) {
      currentReps--;
      if (currentReps === 0) {
        clearInterval(timerInterval);
        document.getElementById('reps').textContent = "0";
        document.getElementById('time').textContent = "00:00";
        alert("✅ Exercise Complete!");
        return;
      }
      currentTime = 30;
    }

    document.getElementById('time').textContent = `00:${currentTime < 10 ? '0' : ''}${currentTime}`;
    document.getElementById('reps').textContent = currentReps;
  }, 1000);
}
