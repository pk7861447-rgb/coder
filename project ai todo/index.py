# ==========================================
# STEP 1: SAMPLE DATASET (Database simulation)
# Data structure: List of Dictionaries
# ==========================================
students_database = [
    {
        "name": "Rahul Sharma",
        "marks": [85, 90, 78, 92],  # Marks in 4 subjects
        "attendance": 88,
    },
    {
        "name": "Priya Patel",
        "marks": [40, 35, 50, 45],
        "attendance": 65,  # Low attendance
    },
    {
        "name": "Amit Verma",
        "marks": [95, 98, 92, 96],
        "attendance": 95,
    },
    {
        "name": "Sneha Gupta",
        "marks": [30, 25, 40, 32],
        "attendance": 80,
    },
]


# ==========================================
# STEP 2: HELPER FUNCTIONS (Logic Execution)
# ==========================================


def calculate_average(marks_list):
    """Marks ki list leta hai aur average return karta hai."""
    total_marks = 0

    # Saare marks ko add karne ke liye loop
    for mark in marks_list:
        total_marks = total_marks + mark

    # Average = Total / Number of items
    average = total_marks / len(marks_list)
    return average


def calculate_grade(avg_score):
    """Average score ke base par grade decide karta hai."""
    if avg_score >= 85:
        return "A"
    elif avg_score >= 70:
        return "B"
    elif avg_score >= 50:
        return "C"
    else:
        return "F"  # Fail


def check_exam_eligibility(attendance_percentage):
    """Agar attendance 75% ya usse zyada hai toh True, nahi toh False."""
    if attendance_percentage >= 75:
        return True
    else:
        return False


# ==========================================
# STEP 3: MAIN PROCESSING SYSTEM
# ==========================================


def process_student_records(records):
    """Saare student data ko process karta hai aur report generate karta hai."""
    processed_results = []

    for student in records:
        # 1. Individual details extract karo (Dictionary Access)
        name = student["name"]
        marks = student["marks"]
        attendance = student["attendance"]

        # 2. Helper functions se values calculate karo
        avg_score = calculate_average(marks)
        grade = calculate_grade(avg_score)
        is_eligible = check_exam_eligibility(attendance)

        # 3. Processed outcome ko naye dictionary mein save karo
        result = {
            "name": name,
            "average": avg_score,
            "grade": grade,
            "eligible": is_eligible,
        }

        # 4. Final list mein add karo
        processed_results.append(result)

    return processed_results


def find_top_performing_student(processed_results):
    """Class mein sabse highest average kiska hai wo dhundta hai."""
    top_student = None
    highest_avg = -1  # Starting condition

    for student in processed_results:
        if student["average"] > highest_avg:
            highest_avg = student["average"]
            top_student = student

    return top_student


# ==========================================
# STEP 4: OUTPUT DISPLAY (Professional Format)
# ==========================================


def display_dashboard(processed_results):
    print("=" * 65)
    print("               COLLEGE ACADEMIC ANALYTICS DASHBOARD              ")
    print("=" * 65)

    print("\n--- INDIVIDUAL STUDENT REPORT ---")
    for student in processed_results:
        print(f"Name       : {student['name']}")
        print(f"Average    : {student['average']:.2f}%")
        print(f"Grade      : {student['grade']}")

        # Conditional status print
        if student["eligible"] == True:
            print("Status     : Eligible for Final Exams")
        else:
            print("Status     : NOT Eligible (Low Attendance)")

        print("-" * 40)

    # Class analytics section
    topper = find_top_performing_student(processed_results)
    print("\n--- CLASS HIGHLIGHTS ---")
    print(
        f"🏆 Class Topper: {topper['name']} with {topper['average']:.2f}% Average (Grade {topper['grade']})"
    )
    print("=" * 65)


# ==========================================
# STEP 5: ENTRY POINT
# ==========================================
if __name__ == "__main__":
    # Program execution start point
    results = process_student_records(students_database)
    display_dashboard(results)