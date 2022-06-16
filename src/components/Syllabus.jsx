import React from 'react'
import logo from '../assets/ksrcelogo.png'

export default function Syllabus() {
   return (
      <>
         <div className="syllabus-container">
            <div className="syllabus-header">
               <img className='img-logo' src={logo} width="60px" height="60px" alt="" srcset="" />
               <h3>K.S.R. COLLEGE OF ENGINEERING (Autonomous) </h3>
            </div>
            <div className="syllabus-body">
               <center>
                  <h3 className='sem'>SEMESTER – III <span className='title'> [DATA STRUCTURES ]</span>
                  </h3>
               </center>

               <div className="units">
                  <div className='unit-name'> <span className='unit-no'>UNIT - 1</span> LINEAR DATA STRUCTURES – LIST </div>

                  <div className='syllabus-list'>Abstract Data Types (ADTs) – List ADT – array– based implementation – linked list implementation – singly linked list
                     – circularly linked list – doubly linked list – applications of list
                  </div>
               </div>
               <div className="units">
                  <div className='unit-name'> <span className='unit-no'>UNIT - 2</span> LINEAR DATA STRUCTURES – STACK AND QUEUES  </div>

                  <div className='syllabus-list'>Stack ADT : Operations – Evaluating arithmetic expressions – Conversion of Infix to postfix expression – Queue ADT :
Operations – Circular Queue – Priority Queue – Dequeue – applications of queue.
                  </div>
               </div>
               <div className="units">
                  <div className='unit-name'> <span className='unit-no'>UNIT - 3</span> NON– LINEAR DATA STRUCTURES – TREES </div>

                  <div className='syllabus-list'>Tree ADT: Tree Traversals – Binary Tree ADT – expression trees – applications of trees – Binary Search Tree ADT –
Threaded Binary Trees – AVL Trees – B– Tree – B+ Tree – Heap – Applications of heap.
                  </div>
               </div>
               <div className="units">
                  <div className='unit-name'> <span className='unit-no'>UNIT - 4</span> SEARCHING AND SORTING</div>

                  <div className='syllabus-list'>Searching: Linear Search – Binary Search – Sorting : Bubble sort – Selection sort – Insertion sort – Shell sort – Radix
sort – Hashing: Hash Functions – Separate Chaining – Open Addressing – Rehashing – Extendible Hashing
                  </div>
               </div>
               <div className="units">
                  <div className='unit-name'> <span className='unit-no'>UNIT - 5</span> GRAPHS </div>

                  <div className='syllabus-list'>Basic Concepts of Graphs: Operations – Depth– First Traversal – Breath– First Traversal – Minimum Spanning Trees:
Kruskal’s and Prim’s Algorithm – Shortest Path Algorithm – Dijkstra’s Algorithm – Bellman– Ford Algorithm.
                  </div>
               </div>
              





            </div>
         </div>
      </>
   )
}
