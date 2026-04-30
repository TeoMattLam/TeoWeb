<script setup lang="ts">
import Version from '../Version.vue';

</script>

<template>
    <Version version="3.0.1 (latest)" file-type=".zip (archive)" file="/files/RandoClasser3.0.1.zip" icon-class="fa-brands fa-windows"/>
    <Version version="3.0" file-type=".zip (archive)" file="/files/RandoClasser3.0.zip" icon-class="fa-brands fa-windows"/>
    <p>
        RandoClasser is a random seating plan generator for school classes. It is made in Kotlin and it is temporarily only available for Windows.
        It features:
    </p>
    <ul>
        <li>Custom desk placement</li>
        <li>Custom student list</li>
        <li>Grouping students that must or must not sit together</li>
        <li>Placing students in a specific row</li>
        <li>Error logging</li>
    </ul>
    <h1 id="how-to-use">How To Use</h1>
    <p>
        Start by opening the tab labeled "Rows", where you can add rows by clicking the leftmost button in the bottom toolbar.<br>
        You start counting rows from the front of the class (marked by the teacher's desk) to the back. You can add a new desk with a custom number of seats.<br>
        To change the direction the class is facing, you have to change the teacher's desk position from the toolbar.<br>
        Next, go to the "Students" tab, where you can add students by clicking the second button in the toolbar. By doing that you create a student card.
        Each card has five rectangles on it. The first one is the student's name, which can't be changed. The second one is the row where the student must seat.
        Then you have the student's deskmate. Finally, you can select the rows and the students the student mustn't sit in or with.
        You can leave everything blank if you don't need any of these conditions.<br>
        The only thing left to do is press "Start". If you want to change something you can simply press on someone's name and then someone else's to swap them.<br>
        You might receive red error messages if you put too many conditions that can't be satisfied.
        For example, if you have 5 students and you put that 3 of them must sit in the first row, which only has 2 seats. <br>
        Thanks for choosing my software.<br><br>
        Version 3.0 uses a console log system insted of notifications. In that version you may also get fake virus alerts.<br>
        If you double click on the excecutable and the program doesn't start, there might be another active instance of it (version >3.0.1).
    </p>
</template>