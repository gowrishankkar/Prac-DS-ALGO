<h2><a href="https://leetcode.com/problems/maximum-number-of-removable-characters/"><div id="big-omega-company-tags"><div id="big-omega-topbar"><div class="companyTagsContainer" style="overflow-x: scroll; flex-wrap: nowrap;"><div class="companyTagsContainer--tag">No companies found for this problem</div></div><div class="companyTagsContainer--chevron"><div><svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" fill="#4087F1" xml:space="preserve" style="width: 20px;"><polygon points="16,22 6,12 7.4,10.6 16,19.2 24.6,10.6 26,12 "></polygon><rect id="_x3C_Transparent_Rectangle_x3E_" class="st0" fill="none" width="32" height="32"></rect></svg></div></div></div></div>1898. Maximum Number of Removable Characters</a></h2><h3>Medium</h3><hr><div><p>You are given two strings <code>s</code> and <code>p</code> where <code>p</code> is a <strong>subsequence </strong>of <code>s</code>. You are also given a <strong>distinct 0-indexed </strong>integer array <code>removable</code> containing a subset of indices of <code>s</code> (<code>s</code> is also <strong>0-indexed</strong>).</p>

<p>You want to choose an integer <code>k</code> (<code>0 &lt;= k &lt;= removable.length</code>) such that, after removing <code>k</code> characters from <code>s</code> using the <strong>first</strong> <code>k</code> indices in <code>removable</code>, <code>p</code> is still a <strong>subsequence</strong> of <code>s</code>. More formally, you will mark the character at <code>s[removable[i]]</code> for each <code>0 &lt;= i &lt; k</code>, then remove all marked characters and check if <code>p</code> is still a subsequence.</p>

<p>Return <em>the <strong>maximum</strong> </em><code>k</code><em> you can choose such that </em><code>p</code><em> is still a <strong>subsequence</strong> of </em><code>s</code><em> after the removals</em>.</p>

<p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "abcacb", p = "ab", removable = [3,1,0]
<strong>Output:</strong> 2
<strong>Explanation</strong>: After removing the characters at indices 3 and 1, "a<s><strong>b</strong></s>c<s><strong>a</strong></s>cb" becomes "accb".
"ab" is a subsequence of "<strong><u>a</u></strong>cc<strong><u>b</u></strong>".
If we remove the characters at indices 3, 1, and 0, "<s><strong>ab</strong></s>c<s><strong>a</strong></s>cb" becomes "ccb", and "ab" is no longer a subsequence.
Hence, the maximum k is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "abcbddddd", p = "abcd", removable = [3,2,1,4,5,6]
<strong>Output:</strong> 1
<strong>Explanation</strong>: After removing the character at index 3, "abc<s><strong>b</strong></s>ddddd" becomes "abcddddd".
"abcd" is a subsequence of "<u><strong>abcd</strong></u>dddd".
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "abcab", p = "abc", removable = [0,1,2,3,4]
<strong>Output:</strong> 0
<strong>Explanation</strong>: If you remove the first index in the array removable, "abc" is no longer a subsequence.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= p.length &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= removable.length &lt; s.length</code></li>
	<li><code>0 &lt;= removable[i] &lt; s.length</code></li>
	<li><code>p</code> is a <strong>subsequence</strong> of <code>s</code>.</li>
	<li><code>s</code> and <code>p</code> both consist of lowercase English letters.</li>
	<li>The elements in <code>removable</code> are <strong>distinct</strong>.</li>
</ul>
</div>